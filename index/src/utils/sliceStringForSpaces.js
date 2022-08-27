export const sliceStringForSpaces = (string) => {
  const indexSpace = string.indexOf(" ")
  if(indexSpace !== -1){
    const	firstPart = string.slice(0, indexSpace)
    const secondPart = string.slice(indexSpace+1)
    return [firstPart, secondPart]
  }
  
  return [string]
}
