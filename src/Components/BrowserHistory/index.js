import {Component} from 'react'

import ListItem from '../ListItem'

import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {searchInput: '', historyList: initialHistoryList}

  clickValue = event => {
    const a = event.target.value
    console.log(a)
    this.setState({searchInput: a})
  }

  deleteBrowser = id => {
    console.log(`Triggered ${id}`)
    const {historyList} = this.state
    console.log(historyList)
    const filteredDate = historyList.filter(e => e.id !== id)
    this.setState({historyList: filteredDate})
  }

  render() {
    const {searchInput, historyList} = this.state

    const searchResults = historyList.filter(e =>
      e.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (searchResults.length !== 0) {
      return (
        <div>
          <div className="bg-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="head"
              alt="app logo"
            />
            <div className="search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="img"
                alt="search"
              />
            </div>
            <input
              type="search"
              placeholder="search history"
              className="input-search"
              onChange={this.clickValue}
            />
          </div>
          <ul className="list-cont">
            {searchResults.map(e => (
              <ListItem
                key={e.id}
                browserDetails={e}
                deleteBrowser={this.deleteBrowser}
              />
            ))}
          </ul>
        </div>
      )
    }

    return (
      <div className="card-2">
        <p>There is no history to show</p>
      </div>
    )
  }
}

export default BrowserHistory
