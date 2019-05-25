# jrnl-reminder

<p align="center">
  <image src="https://user-images.githubusercontent.com/3087225/58364951-67964a00-7e8a-11e9-93b4-233b526844ee.gif">
</p>

If you haven't tried [jrnl.sh](http://jrnl.sh/) I definitely recommend you try it out.

If you're here I'm guess I don't have to sell you on the benefits of journaling. Still, as valuable as it is,
it's easy to forget.

This is a simple node script to send you a prompt if you haven't jrnl'd in the last hour. It lets you add your
response directly in the notification so that you can quickly get back to the work at hand.

**Note**: This software was developed for and tested on a mac. It's highly unlikely that it'll work as is on a different platform. I'm open to PRs though.

# Usage

### Install jrnl

```
brew install jrnl
```

### Install with npm (or yarn)

```
npm i -g jrnl-reminder
```

### Setup a [cron job](https://www.youtube.com/watch?v=QZJ1drMQz1A) to run it hourly

_Open your cronfile for editing_

```
crontab -e
```

and add an entry (here's mine)

```cron
0 10-17 * * 1-5 jrnl-reminder
```

This schedule is from 10am to 5pm Monday through Friday. If you need help building a cron schedule
I recommend using [crontab.guru](https://crontab.guru/)
