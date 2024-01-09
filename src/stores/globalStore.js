import { map } from "nanostores"

export const globalStore = map({
	colorMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light",
	name: "Paul",
	currentStepIndex: 1,
	stepsCount: 0,
	navigation: {
		navbar: {
			isMoving: false,
			position: { x:0, y:0 }
		}, 
	},
	sound: {
		enabled: true
	}
})

export function setName( newName ){
	globalStore.setKey("name", newName)
}

export function setColorMode(newColor){
	globalStore.setKey("colorMode", newColor)
}





// NAVIGATION
export const navigationStore = map({
	stepGrabed: false,
	isCurrentlyManipulatedIndex: null,
})

export function setStepGrabed( bool ){
	console.log("set grabed", bool)
	navigationStore.setKey("stepGrabed", bool)
}

export function setIsCurrentlyManipulatedIndex( payload ){
	console.log("setCurrentStepIndex", payload)
	navigationStore.setKey("isCurrentlyManipulatedIndex", payload)
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


// MOUSE STORE
export const mouseStore = map({
	x: window.innerWidth / 2,
	y: window.innerHeight / 2
})

export function setMousePosition(payload){
	if( payload.x ){
		mouseStore.setKey("x", payload.x)
		mouseStore.setKey("y", payload.y)
	}
}

// STEP COORDS STORE
export const stepCoords = map({
	x: 0,
	y: 0,
	width: 0,
	height: 0
})

export function setStepCoords(payload){
	const { x, y, width, height } = payload
	stepCoords.setKey("x", x)
	stepCoords.setKey("y", y)
	stepCoords.setKey("width", width)
	stepCoords.setKey("height", height)
}
