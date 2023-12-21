import { map } from "nanostores"

export const globalStore = map({
	name: "Paul",
	currentStepIndex: 0,
	stepsCount: 0,
	navigation: {
		stepGrabed: false,
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


// STEPS
export function setCurrentStepIndex(newIndex){
	if( newIndex <= globalStore.get().stepsCount - 1 ){
		globalStore.setKey("currentStepIndex", newIndex)
	}
}

export function setCurrentStepIndexIncrement(){
	const currentStepIndex = globalStore.get().currentStepIndex

	if( currentStepIndex < globalStore.get().stepsCount - 1 ){
		globalStore.setKey("currentStepIndex", currentStepIndex + 1)
	}
}

export function setCurrentStepIndexDecrement(){
	const currentStepIndex = globalStore.get().currentStepIndex
	
	if( currentStepIndex > 0 ){
		globalStore.setKey("currentStepIndex", currentStepIndex - 1)
	}
}

export function setStepsCount( size ){
	globalStore.setKey("stepsCount", size)
}


// NAVIGATION
export function setstepGrabed( bool ){
	globalStore.setKey("navigation",
		Object.assign(globalStore.get().navigation, { stepGrabed: bool })
	)
}

export function setIsCurrentlyManipulatedIndex( payload ){
	console.log("store currently manip triggered : ", payload)
	globalStore.setKey("navigation",
		Object.assign(globalStore.get().navigation,  { isCurrentlyManipulatedIndex: payload })
	)

	console.log("after the store update : ", globalStore.get().navigation)
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
