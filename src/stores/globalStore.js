import { defineStore } from 'pinia'

export const useUserStore = defineStore('storedUser',
	{

		state: () => ({
			name: "Paul",
			currentStepIndex: 2,
			bgCurrentIndex: 0,
			stepsCount: 0,
			navigation: {
				stepGrabed: false,
				navbar: {
					isMoving: false,
					position: { x:0, y:0 }
				}, 
				isCurrentlyManipulatedIndex: null
			},
			bgHomeCount: 95,
			sound: {
				enabled: true
			},
			currentSearch: ""
		}),

		actions: {
			setName( newName ){
				this.name = newName
			},

			setCurrentStepIndex(newIndex){
				if( newIndex <= this.stepsCount - 1 ){
					this.currentStepIndex = newIndex
				}
			},

			setCurrentStepIndexIncrement(){
				if( this.currentStepIndex < this.stepsCount - 1 ){
					this.currentStepIndex++
				}
			},

			setCurrentStepIndexDecrement(){
				if( this.currentStepIndex > 0 ){
					this.currentStepIndex--
				}
			},

			setStepsCount( size ){
				this.stepsCount = size
			},

			// BACKGROUND
			setBgCurrentIndex(newIndex){
				if( newIndex <= 4 ){
					this.bgCurrentIndex = newIndex
				} else {
					this.bgCurrentIndex = 0
				}
			},
			setBgCurrentIndexIncrement(){
				if( this.bgCurrentIndex < this.bgHomeCount ){
					this.bgCurrentIndex++
				}
			},

			setBgCurrentIndexDecrement(){
				if( this.bgCurrentIndex > 0 ){
					this.bgCurrentIndex--
				}
			},


			// NAVIGATION
			setstepGrabed( bool ){
				this.navigation.stepGrabed = bool
			},

			setIsCurrentlyManipulatedIndex( payload ){
				this.navigation.isCurrentlyManipulatedIndex = payload
			},

			setNavigationNavbarPosition( obj ){
				this.navigation.navbar.position = obj
			},

			setNavigationNavbarIsMoving( bool ){
				this.navigation.navbar.isMoving = bool
			},

			// SEARCH
			setCurrentSearch( payload ){
				this.currentSearch = payload
			}
		},

		// @TODO : restablish at true later
		persist: false

	}

)
