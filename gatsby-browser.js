require('./src/styles/styles.css');

// onClientEntry() must be included for the requires above to be triggered,
// even if it is empty!
exports.onClientEntry = () => {
    // Load Roboto font to support Material Design
    const pathRoboto =
        'https://fonts.googleapis.com/css?family=Roboto:300,400,500';
    const linkRoboto = document.createElement('link');
    linkRoboto.setAttribute('rel', 'stylesheet');
    linkRoboto.setAttribute('href', pathRoboto);
    document.head.appendChild(linkRoboto);

    // Load Material Icons
    const pathIcons = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    const linkIcons = document.createElement('link');
    linkIcons.setAttribute('rel', 'stylesheet');
    linkIcons.setAttribute('href', pathIcons);
    document.head.appendChild(linkIcons);
};
