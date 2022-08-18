import { articleType } from "../Types/articles_type"
import { images } from "./images/images"

const parsers = {
  projects: projectAdapter,
  profiles: profileAdapter,
  teams: teamsAdapter,
  foro: publicationAdapter
}

function projectAdapter (project) {
  try {
    const article = {...articleType}
    
    article._id = project._id || ""
    article.title = project.title || "No title"
    article.image = project.image || images.ncLogo,
    article.description = project.description || "No decription",
    article.tags = project.team && `${project.team.cohortType} ${project.team.cohortNumber} ${project.team.group}` || "No tags",
    article.tags2Array = project.technologies || ["", ""]
  
    return article
  } catch (error) {
    return articleType
  }
}

function publicationAdapter (publication) {
  try {
    const article = {...articleType}

    article._id = publication._id || ""
    article.title = publication.title || "No title"
    article.image = publication.image || images.ncLogo,
    article.description = publication.content || "No content",
    article.tags = publication.categories?.length && publication.categories[0] ||  "No tags",
    article.tags2Array = publication.technologies || []
  
    return article
  }
  catch (error) {
    articleType
  }
}


function profileAdapter (profile) {
  try {
    const article = {...articleType}
    
    article._id = profile._id || ""
    article.title = profile.firstName ? `${profile.firstName} ${profile.lastName}` : "Sin nombre"
    article.image = profile.avatar || images.ncLogo,
    article.description = profile.description || "Sin descripción",
    article.tags = profile.projects?.length && profile.projects[0]  || "No tags",
    article.tags2Array = profile.technologies || ["", ""]
  
    return article 
  } catch (error) {
    return articleType
  }

}

function teamsAdapter (team) {
  try {
    const article = {...articleType}
    console.log("id team", team)
    article._id = team._id || ""
    article.title = `${team.cohortType} ${team.cohortNumber}-${team.group}`
    article.image = images.ncLogo,
    article.description = "Grupo de no country",
    article.tags = "No tags",
    article.tags2Array = team.technologies || []
  
    return article
  } catch (error) {
    return articleType
  }
}


export const parseArticle = (article, type) => {
  const articleAdaptaded = parsers[type](article)
  return articleAdaptaded
}