import Cookies from "js-cookie";

let framework = $state<"REACT" | "SVELTE">(
	Cookies.get("framework") !== "SVELTE" ? "REACT" : "SVELTE",
); // React is 100% framework

export const stateGlobal = {
	get framework() {
		return framework;
	},
	set framework(value: typeof framework) {
		Cookies.set("framework", value, { sameSite: "strict" });
		framework = value;
	},
};
