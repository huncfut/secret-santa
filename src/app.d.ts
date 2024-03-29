// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
interface MemberData {
	name: string;
	key: string;
}

interface TextInputData {
	name: string;
	id: string;
	error: Boolean;
}