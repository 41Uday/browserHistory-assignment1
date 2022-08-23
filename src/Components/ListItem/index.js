import './index.css'

const ListItem = props => {
  const {browserDetails, deleteBrowser} = props

  const {timeAccessed, logoUrl, title, domainUrl, id} = browserDetails

  const onButton = () => {
    deleteBrowser(id)
  }

  return (
    <li>
      <div className="list-container">
        <div className="inner-list">
          <p>{timeAccessed}</p>
          <img src={logoUrl} className="img" alt="domain logo" />
          <p className="head">{title}</p>
          <p>{domainUrl}</p>
        </div>

        <button type="button" testid="delete" onClick={onButton}>
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />{' '}
        </button>
      </div>
    </li>
  )
}

export default ListItem
