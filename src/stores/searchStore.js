import { map } from "nanostores"

export const searchStore = map({
	formation: "",
	experience: "",
	bio: ""
})

// SEARCH
export function setCurrentSearch( payload ){
	const { key, searchString } = payload
	searchStore.setKey(key, searchString)
}
