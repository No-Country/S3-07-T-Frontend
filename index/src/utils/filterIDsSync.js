export const filterIDsSync = (categories) => {
  const categoriesIDs = []
  for (let category of categories){
    categoriesIDs.push(category._id)
  }
  return categoriesIDs
} 