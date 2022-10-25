const express = require('express');
const path = require('path');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// for nodemailer ------------------
const router = express.Router()
const cors = require('cors')
const nodemailer = require('nodemailer')
app.use(cors())
app.use("/", router)
// ----------------------------------



// const routes = require('./routes');
// import Apollo server
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");

// Apollo server
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  })
  await server.start()
  server.applyMiddleware({ app })
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
}

startServer()


// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});


// for nodemailer ------------------
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "easyrenttestmail@gmail.com",
    pass: "zhgx olhg sizc biaw",
    // user: "pawsforhomes2022@gmail.com",
    // pass: "ucgqbyymoseboinv",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/sendmessage/:roomId", (req, res) => {
  console.log(req)
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const to = req.body.to 
  const mail = {
    from: name,
    // to: `${to}`
    to: to,
    subject: "Send Message to Owner",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
// --------------------------


