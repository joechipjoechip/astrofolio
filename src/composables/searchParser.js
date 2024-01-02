export function useDefineSlotVisibility( slot, searchRegEx ){
    return parseObject(slot, searchRegEx)
}

function parseObject( objectToParse, searchRegEx ){
    let isVisible = false

    Object.keys(objectToParse).forEach(key => {

        if( key !== "isDisplayed" && !key.toLowerCase().includes("src") ){
    
            if( typeof objectToParse[key] === "string" ){
    
                isVisible = isVisible || parseString(objectToParse[key], searchRegEx)
    
            } else if( typeof objectToParse[key] === "object" ){
    
                if( objectToParse[key].length ){
                    isVisible = isVisible || parseArray(objectToParse[key], searchRegEx)
                } else {
                    isVisible = isVisible || parseObject(objectToParse[key], searchRegEx)
                }
    
            }

        }

    })

    return isVisible
}

function parseArray( arrayToParse, searchRegEx ){
    let isVisible = false

    arrayToParse.filter(element => {
        if( typeof element === "string" ){
            isVisible = isVisible || element.match(searchRegEx.value)?.length
        } else {
            if( element.length ){
                isVisible = isVisible || parseArray(element, searchRegEx)
            } else {
                isVisible = isVisible || parseObject(element, searchRegEx)
            }
        }
    })

    return isVisible
}

function parseString( stringToParse, searchRegEx ){
    return stringToParse.match(searchRegEx.value)
}