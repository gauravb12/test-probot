module.exports = (robot) => {
  // Your code here
  robot.log('Yay, the app was loaded!')

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/

  robot.on('push', async context => {
    // Code was pushed to the repo, what should we do with it?
    robot.log(context)
    console.log(context)
  })

  robot.on('issues.opened', async context => {
        console.log(context)
  })

  robot.on('issues.closed', async context =>{
        console.log(context.payload)
  })

  robot.on('issues.reopened', async context =>{
        console.log(context.repository)
  })
}

const SmeeClient = require('smee-client')

const smee = new SmeeClient({
      source: 'https://smee.io/IEJedtfXeu3ZENlp',
        target: 'http://localhost:3000/events',
          logger: console
})

const events = smee.start()

// Stop forwarding events
events.close()
