import * as vscode from "vscode";
import {
	getInitCmd,
	getInstallCmd,
	getComponentDocLink,
	getInstallAllComponents,
	getRegistry,
	parkUiDocsUrl,
} from "./utils/registry";
import { executeCommand } from "./utils/vscode";
import type { Components } from "./utils/registry";

const commands = {
	initCli: "park-ui.initCli",
	addNewComponent: "park-ui.addNewComponent",
	addMultipleComponents: "park-ui.addMultipleComponents",
	gotoComponentDoc: "park-ui.gotoComponentDoc",
	reloadComponentList: "park-ui.reloadComponentList",
	installAllComponents: "park-ui.installAllComponents",
	gotoDoc: "park-ui.gotoDoc",
} as const;

export function activate(context: vscode.ExtensionContext) {
	let registryData: Components;

	const disposables: vscode.Disposable[] = [
		vscode.commands.registerCommand(commands.initCli, async () => {
			const intCmd = await getInitCmd();
			executeCommand(intCmd);
		}),
		vscode.commands.registerCommand(commands.addNewComponent, async () => {
			if (!registryData) {
				const newRegistryData = await getRegistry();

				if (!newRegistryData) {
					vscode.window.showErrorMessage("Can not get the component list");
					return;
				}

				registryData = newRegistryData;
			}

			const selectedComponent = await vscode.window.showQuickPick(registryData, {
				matchOnDescription: true,
			});

			if (!selectedComponent) {
				return;
			}

			const installCmd = await getInstallCmd([selectedComponent.label]);
			executeCommand(installCmd);
		}),

		vscode.commands.registerCommand(commands.addMultipleComponents, async () => {
			if (!registryData) {
				const newRegistryData = await getRegistry();

				if (!newRegistryData) {
					vscode.window.showErrorMessage("Can not get the component list");
					return;
				}

				registryData = newRegistryData;
			}

			const selectedComponents = await vscode.window.showQuickPick(registryData, {
				matchOnDescription: true,
				canPickMany: true,
			});

			if (!selectedComponents) {
				return;
			}

			const selectedComponent = selectedComponents.map((component) => component.label);

			const installCmd = await getInstallCmd(selectedComponent);
			executeCommand(installCmd);
		}),
		vscode.commands.registerCommand(commands.gotoComponentDoc, async () => {
			if (!registryData) {
				const newRegistryData = await getRegistry();

				if (!newRegistryData) {
					vscode.window.showErrorMessage("Can not get the component list");
					return;
				}

				registryData = newRegistryData;
			}

			const selectedComponent = await vscode.window.showQuickPick(registryData, {
				matchOnDescription: true,
			});

			if (!selectedComponent) {
				return;
			}

			const componentDocLink = getComponentDocLink(selectedComponent.label);
			vscode.env.openExternal(vscode.Uri.parse(componentDocLink));
		}),
		vscode.commands.registerCommand(commands.reloadComponentList, async () => {
			const newRegistryData = await getRegistry();

			if (!newRegistryData) {
				vscode.window.showErrorMessage("Can not get the component list");
				return;
			}

			registryData = newRegistryData;
			vscode.window.showInformationMessage("park/ui: Reloaded components");
		}),

		vscode.commands.registerCommand(commands.installAllComponents, async () => {
			const intCmd = await getInstallAllComponents();
			executeCommand(intCmd);
		}),
		vscode.commands.registerCommand(commands.gotoDoc, async () => {
			vscode.env.openExternal(vscode.Uri.parse(parkUiDocsUrl));
		}),
	];

	context.subscriptions.push(...disposables);
}

// This method is called when your extension is deactivated
export function deactivate() { }
