<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="VenTalkLogo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">VenTalk</h3>

  <p align="center">
    Need to vent about a bad day or just want someone to chat with? VenTalk pairs users with compatible needs in this unique wellness messaging app and quickly relieves everyday     stressors. Created for Hack Western VII.
    <br />
  </p>
</p>


## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Usage](#usage)
* [Acknowledgements](#acknowledgements)


## About The Project

[![About Product Screenshot][product-screenshot]](https://example.com)
Welcome to VenTalk! The idea for VenTalk originated from an everyday stressor that everyone on our team could relate to; commuting alone to and from class during the school year. After a stressful work or school day, we want to let out all our feelings and thoughts, but do not want to alarm or disturb our loved ones. Releasing built-up emotional tension is a highly effective form of self-care, but many people stay quiet as not to become a burden on those around them. Over time, this takes a toll on one’s well being, so we decided to tackle this issue in a creative yet simple way. 

This project is our group's submission for [Hack Western VII](https://hack-western-7.devpost.com/). See our [Devpost page](https://devpost.com/software/presssy) to learn more.

### Built With

* [React Native](https://reactnative.dev/)
* [Node.js](https://nodejs.org/en/)
* [Google Compute Engine](https://cloud.google.com/)
* [Socket.io](https://socket.io/)

Our client app was built using React Native. On the backend, we have our server running on a GCP Compute Engine instance, which manages users, provides matchmaking services, and acts as a relay for sending messages between clients. Matchmaking is done using Dandelion's [Text Similarity API](https://dandelion.eu/), where we have an algorthim that matches users based on related content and sentiment scores. Client-to-client communication is done with Socket.io, which provides a real-time websocket connection to each active user.

<!-- USAGE EXAMPLES -->
## Usage

Upon entering the home screen, the user can carry out three choices: 
* Mental Health - a chat thread dedicated to all things mental health. Tell the app how you're feeling right now and it will automatically match you with someone who shares similar sentiments, if another user is available.
* Just Chat - a general chat thread. Again, tell the app what you want to talk about and it will do its best to match you with a conversation partner with similar interests.
* Connect Me with Hotlines - a collection of important contacts in case you ever need them.


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Clayon Haight](https://clayhaight.ca)
* [Josh Ming](https://www.linkedin.com/in/joshua-ming-bb5a6b185/)
* [Madeleine Chu](https://www.linkedin.com/in/madeleine-chu/)
* [Wayne Zhu](https://waynezhu.ca)
