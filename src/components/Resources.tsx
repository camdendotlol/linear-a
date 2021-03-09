import React, { useState } from 'react'
import { Resource, ResourceType } from '../utils/types'
import resources from '../utils/resources'
import bootstrapIcons from '../utils/bootstrapIconPaths'

const Resources: React.FC = () => {
  const [filterTags, setFilterTags] = useState<Array<string>>([])
  const [filterFormats, setFilterFormats] = useState<Array<string>>([])
  const [showFilters, setShowFilters] = useState<boolean>(false)

  // Sort alphabetically by title
  // Would prefer author but that would involve refactoring for last names,
  // which would complicate resources with organizational authors.
  const sortedResources = resources.sort((a, b) => a.title.localeCompare(b.title))

  const getTagList = (resources: Array<Resource>) => {
    let tagList: Array<string> = []
    resources.forEach(r => {
      r.tags.forEach(t => {
        if (!tagList.includes(t)) {
          tagList = tagList.concat(t)
        }
      })
    })
    return tagList
  }

  const displayTagSelector = () => {
    const tags = getTagList(sortedResources)

    const styleTagButton = (tag: string): string => {
      if (filterTags.includes(tag)) {
        return ' is-primary'
      } else {
        return ''
      }
    }

    return (
      <div className='buttons'>
        {tags.map(tag => <button
          className={ 'button' + styleTagButton(tag) }
          key={tag}
          onClick={() => filterTags.includes(tag) ? setFilterTags(filterTags.filter(t => t !== tag)) : setFilterTags(filterTags.concat(tag))}
        >{tag}</button>)}
      </div>
    )
  }

  const displayFormatSelector = () => {
    // If a filter is selected, its button will appear orange
    const styleFormatButton = (format: string): string => {
      if (filterFormats.includes(format)) {
        return ' is-primary'
      } else {
        return ''
      }
    }

    return (
      <div className='buttons'>
        <button
          className={ 'button' + styleFormatButton(ResourceType.Website) }
          onClick={() => filterFormats.includes(ResourceType.Website) ? setFilterFormats(filterFormats.filter(f => f !== ResourceType.Website)) : setFilterFormats(filterFormats.concat(ResourceType.Website))}
        >
          Webpage
        </button>
        <button
          className={ 'button' + styleFormatButton(ResourceType.Book) }
          onClick={() => filterFormats.includes(ResourceType.Book) ? setFilterFormats(filterFormats.filter(f => f !== ResourceType.Book)) : setFilterFormats(filterFormats.concat(ResourceType.Book))}
        >
          Book
        </button>
        <button
          className={ 'button' + styleFormatButton(ResourceType.Video) }
          onClick={() => filterFormats.includes(ResourceType.Video) ? setFilterFormats(filterFormats.filter(f => f !== ResourceType.Video)) : setFilterFormats(filterFormats.concat(ResourceType.Video))}
        >
          Video
        </button>
      </div>
    )
  }

  // Ugly function to do the actual filtering
  // Since there are two different filter types (format and topic),
  // we have to address cases where both of them are used, where
  // only one of the two is used, and where neither is used.
  const filterResources = (resourceList: Array<Resource>) => {
    if (filterTags.length === 0 && filterFormats.length === 0) {
      return resourceList
    } else if (filterTags.length === 0 && filterFormats.length !== 0) {
      return resourceList.filter(r => filterFormats.includes(r.type))
    } else if (filterTags.length !== 0 && filterFormats.length === 0) {
      return resourceList.filter(r => r.tags.some(tag => filterTags.includes(tag)))
    } else {
      const filterByTag = resourceList.filter(r => r.tags.some(tag => filterTags.includes(tag)))
      return filterByTag.filter(r => filterFormats.includes(r.type))
    }
  }

  // Only display the Clear Filters button if there are filters to clear
  const displayClearFiltersButton = () => {
    if (filterFormats.length === 0 && filterTags.length === 0) {
      return null
    } else {
      return (
        <button
          className='button'
          onClick = {() => {
            setFilterFormats([])
            setFilterTags([])
          }}
        >
        Clear Filters
        </button>
      )
    }
  }

  // The filter box is collapsed by default, and is only shown if showFilters
  // is set to true. The user can toggle it by clicking the button.
  const displayFilterBox = () => {
    if (showFilters) {
      return (
        <div className='box has-text-black'>
          <div className='buttons'>
            <button
              className='button'
              onClick={() => setShowFilters(false)}
            >
              Hide Filters
            </button>
            {displayClearFiltersButton()}
          </div>
          <h4>Format:</h4>
          {displayFormatSelector()}
          <h4>Category:</h4>
          {displayTagSelector()}
        </div>
      )
    } else {
      return (
        <div className='box'>
          <div className='buttons'>
            <button
              className='button'
              onClick={() => setShowFilters(true)}
            >
              Show Filters
            </button>
            {displayClearFiltersButton()}
          </div>
        </div>
      )
    }
  }

  // Annoying to hardcode this compared to the auto-generation of the tag list
  // Any future formats must be accounted for here as well as in ../utils/types.tsx
  const displayResources = (item: Resource) => {
    const displayIcon = (type: ResourceType): React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> | null => {
      switch (type) {
      case (ResourceType.Website):
        return <img src={bootstrapIcons.laptop} alt='' />
      case (ResourceType.Book):
        return <img src={bootstrapIcons.book} alt='' />
      case (ResourceType.Video):
        return <img src={bootstrapIcons.film} alt='' />
      default:
        return null
      }
    }

    return (
      <div className='box resource-box' key={item.url}>
        <a href={item.url}>
          <div className='media has-text-black'>
            <figure className='media-left'>
              <p className='image is-64x64'>
                {displayIcon(item.type)}
              </p>
            </figure>
            <div className='media-content'>
              <div className='content'>
                <p>
                  <strong className='has-text-primary'>{item.title}</strong> by <span className='has-text-secondary'>{item.author}</span>
                  <br />
                  {item.description}
                  <br />
                  <span className='has-text-grey is-hidden-mobile'>{item.url}</span>
                  <br className='is-hidden-mobile' />
                  Tags: {item.tags.map(t => <span className='resource-tag' key={t}>{t}</span>)}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  }

  // Displays the filtered resources
  const handleFilterResults = (resourceList: Array<Resource>) => {
    const resourcesToShow = filterResources(resourceList)
    if (resourcesToShow.length > 0) {
      return resourcesToShow.map(item => displayResources(item))
    } else {
      // If nothing matches the filters, let the user know instead of just displaying nothing
      return (
        <div className='box has-text-black'>
          <p>No resources matched your filters.</p>
        </div>
      )
    }
  }

  return (
    <div>
      <div className='hero mb-4'>
        <div className='hero-body has-text-centered'>
          <h1 className='title'>Resources</h1>
        </div>
      </div>
      <div className='container' style={{ maxWidth: '1000px' }}>
        {displayFilterBox()}        
        {handleFilterResults(sortedResources)}
      </div>
    </div>
  )
}

export default Resources