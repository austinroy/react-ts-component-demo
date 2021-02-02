import { DisplayWithoutTS } from '../src/pages/WithoutTS'

const JSCOmponent = () => {
    return(
      <div>
          <a href="/">With TS</a>
          <br/>
          <a href="/WithoutTS">Without TS</a>
          <br/>
          <br/>
          <DisplayWithoutTS />
      </div>
    )
  }
  
  export default JSCOmponent