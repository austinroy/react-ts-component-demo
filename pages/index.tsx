import { DisplayWithTS } from '../src/pages/WithTS'

const TSComponent = () => {
    return(
      <div>
          <a href="/">With TS</a>
          <br/>
          <a href="/WithoutTS">Without TS</a>
          <br/>
          <br/>
          <DisplayWithTS />
      </div>
    )
  }
  
  export default TSComponent