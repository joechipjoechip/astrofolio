import { useEventListener } from '@vueuse/core'
import { useEmitter } from "@/composables/Emitter"

export function useUserInteractions() {
    const { emit } = useEmitter()

    useEventListener(window, "click", handleTouchAndClick)

    useEventListener(window, "touchstart", handleTouchStart)
    useEventListener(window, "touchend", handleTouchEnd)
    useEventListener(window, "touchmove", handleTouchMove)

    useEventListener(window, "touchcancel", handleTouchEnd)
    useEventListener(window, "scrollend", handleTouchEnd)

    useEventListener(window, "mousedown", handleTouchStart)
    useEventListener(window, "mouseup", handleTouchEnd)
    useEventListener(window, "mousemove", handleTouchMove)


    useEventListener(window, "keydown", handleKeyDown)
    useEventListener(window, "resize", handleResize)


	function handleTouchStart( event ){
		emit("main-touch-start", event)
	}
	
	function handleTouchEnd( event ){
		emit("main-touch-end", event)
	}
	
	function handleTouchMove( event ){
		emit("main-touch-move", event)
	}
    
    function handleTouchAndClick( event ){
        emit("main-touch-and-click", event)
    }

    function handleKeyDown( event ){
        emit("main-keydown", event)
    }

    function handleResize( event ){
        emit("main-resize", event)
    }

}
