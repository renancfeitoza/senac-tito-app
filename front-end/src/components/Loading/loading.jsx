import React from 'react'
import ReactLoading from 'react-loading'
import './loading.css'
const Example = ({ loading, text } = this.props) =>
  loading ? (
    <div className="fixed">
      <div className="fixedReactLoading">
        <ReactLoading className="w-3 h-3"
          type={'spinningBubbles'}
          color={'black'}
        />
        <span className="textLoading" role="text">
          {text === undefined ? 'Carregando ...' : text}
        </span>
      </div>
    </div>
  ) : (
    <>
    </>
  )

export default Example
