// this file is to be used to export into index.js to obtain the "badge" for the license

function licenseInfo(license) {

    switch (license) {
        case "Apache License 2.0":
            console.log("You have chosen license - Apache License 2.0");
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "MIT License":
            console.log("You have chosen license - MIT");
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "Mozilla Public License 2.0":
            console.log("You have chosen license - Mozilla Public License 2.0");
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            break;
        case "IBM Public License Version 1.0":
            console.log("You have chosen license - IBM Public License");
            return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
            break;
        case "The Do What the F**k You Want to Public License":
            console.log("You have chosen license - The Do What the F**k You Want to Public License");
            return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
            break;
        case "None":
            console.log("You have chosen not to use a License on this Application");
            return "[![License: None](https://img.shields.io/badge/License-NONE-red.svg)]";
            break;    
}       
}

// Export our licenseInfo function for use by index.js
module.exports = {
    licenseInfo
};