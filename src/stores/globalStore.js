import { map } from "nanostores"

export const globalStore = map({
	colorMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light",
	name: "Paul",
	currentStepIndex: 0,
	stepsCount: 0,
	stepGrabed: false,
	navigation: {
		navbar: {
			isMoving: false,
			position: { x:0, y:0 }
		}, 
		isCurrentlyManipulatedIndex: null
	},
	sound: {
		enabled: true
	},
	currentSearch: ""
})

export function setName( newName ){
	globalStore.setKey("name", newName)
}

export function setColorMode(newColor){
	console.log("setColorMode du store : triggered")
	globalStore.setKey("colorMode", newColor)
}


// STEPS
export function setCurrentStepIndex(newIndex){
	globalStore.setKey("currentStepIndex", newIndex)
}

export function setCurrentStepIndexIncrement(){
	const currentStepIndex = globalStore.get().currentStepIndex
	if( currentStepIndex < globalStore.get().stepsCount - 1 ){
		setCurrentStepIndex(currentStepIndex + 1)
	}
}

export function setCurrentStepIndexDecrement(){
	const currentStepIndex = globalStore.get().currentStepIndex
	if( currentStepIndex > 0 ){
		setCurrentStepIndex(currentStepIndex - 1)
	}
}

export function setStepsCount( size ){
	globalStore.setKey("stepsCount", size)
}


// NAVIGATION
export function setStepGrabed( bool ){
	globalStore.setKey("stepGrabed", bool)
}

export function setIsCurrentlyManipulatedIndex( payload ){
	globalStore.setKey("navigation",
		Object.assign(globalStore.get().navigation,  { isCurrentlyManipulatedIndex: payload })
	)
}

// TDO : à tester (si la key fonctionne)
export function setNavigationNavbarPosition( obj ){
	globalStore.setKey("navigation.navbar",
		Object.assign(globalStore.get().navigation.navbar,  { navbar: { position: obj } })
	)
}

export function setNavigationNavbarIsMoving( bool ){
	globalStore.setKey("navigation.navbar",
		Object.assign(globalStore.get().navigation.navbar,  { navbar: { isMoving: bool } })
	)
}


// SEARCH
export function setCurrentSearch( payload ){
	globalStore.setKey("currentSearch", payload)
}
