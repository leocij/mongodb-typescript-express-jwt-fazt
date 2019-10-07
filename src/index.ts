import './dotenvConfig'
import './database'

import app from './app'

main()
function main() {
  const port = app.get('port')
  app.listen(port)
  console.log('Server on port', port)
}
