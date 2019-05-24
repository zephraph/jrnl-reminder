# jrnl-reminder

If you haven't tried [jrnl.sh](http://jrnl.sh/) I definitely recommend you try it out.

If you're here I'm guess I don't have to sell you on the benefits of journaling. Still, as valuable as it is,
it's easy to forget.

This is a simple node script to send you a prompt if you haven't jrnl'd in the last hour. It lets you add your
response directly in the notification so that you can quickly get back to the work at hand.

# Usage

Install with npm (or yarn)

```
npm i -g jrnl-reminder
```

Setup a [cron job](https://www.youtube.com/watch?v=QZJ1drMQz1A) to run it hourly

I recommend a cron entry like [0 10-17 \* \* 1-5](https://crontab.guru/#0_10-17_*_*_1-5). That'll run once an hour from 10 to 5 on weekdays.
