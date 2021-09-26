# Forum change reason
Autocompletes edit reason on w.org Forum change


![autocomplete_reason_on_forum_change](https://user-images.githubusercontent.com/65488419/134817181-1a1685cc-3881-4b4f-aaeb-e58bbd523f05.gif)

This is a userscript, used with TamperMonkey or GreaseMonkey, in order to help moderators on wordpress.org/support/forums
This adds `Moved from X to Y` in the edit reason field, when the forum is changed.

## Installation

To install, click [this link](https://github.com/vlad-timotei/forum-change-reason/raw/main/forum-change-reason.user.js) or open `forum-change-reason.user.js` and hit the Raw button. TamperMonkey or GreaseMonkey will take over from there.

You can customize the message, just make sure the placeholders stay in place (`%1$s` - old forum, `%2$s` - new forum).
Just edit this line as you wish `const reasonText = 'Moved from %1$s to %2$s.';`

## Contributing

Contributions are welcome, bugreports, suggestions and even pull requests! No limitations, shoot for the stars!
