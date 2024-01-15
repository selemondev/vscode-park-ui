import { ofetch } from "ofetch";
import { to } from "./index";
import { detectPackageManager } from "./vscode";

type OgComponent = {
    name: string;
    href: string;
};

type ParkComponent = {
    components: OgComponent[]
};
  
type Component = {
    label: string;
};

export const parkUiDocsUrl = "https://park-ui.com/";

export type Components = Component[];

export const getRegistry = async (): Promise<Components | null> => {
    const reqUrl = "https://park-ui.com/registry/tailwind/react/components/index.json";
    const [res, err] = await to(ofetch(reqUrl));

    if (err || !res) {
        return null;
    }

    const [data] = await to<ParkComponent>(res);

    if (!data) {
        return null;
    }

    const components: Components = (data.components).map((c) => {
        const component: Component = {
            label: c.name.toLocaleLowerCase()
        };

        return component;
    });

    return components;
};

export const getInstallCmd = async (components: string[]) => {
    const packageManager = await detectPackageManager();
    const componentStr = components.join(" ");

    if (packageManager === "bun") {
        return `bunx @park-ui/cli add ${componentStr}`;
    }

    if (packageManager === "pnpm") {
        return `pnpm dlx @park-ui/cli add ${componentStr}`;
    }

    return `npx @park-ui/cli add ${componentStr}`;
};

export const getInitCmd = async () => {
    const packageManager = await detectPackageManager();

    if (packageManager === "bun") {
        return "bunx @park-ui/cli init";
    }

    if (packageManager === "pnpm") {
        return "pnpm dlx @park-ui/cli init";
    }

    return "npx @park-ui/cli init";
};

export const getInstallAllComponents = async () => {
    const packageManager = await detectPackageManager();

    if (packageManager === "bun") {
        return "bunx @park-ui/cli add --all";
    }

    if (packageManager === "pnpm") {
        return "pnpm dlx @park-ui/cli add --all";
    }

    return "npx @park-ui/cli add --all";
};


export const getComponentDocLink = (component: string) => {
    return `${parkUiDocsUrl}/docs/tailwind/components/${component}`;
};
