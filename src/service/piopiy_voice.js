
export const piopiy_start = async (_this) => {

    //Please update Agent/User ID and password

    _this.piopiy.login("xxxxxxx", "xxxxxx", "sbcind.telecmi.com");

    _this.piopiy.on('login', (e) => {
        console.log(e)
    });

    _this.piopiy.on('trying', (e) => {
        console.log(e)
    })

    _this.piopiy.on('ringing', (e) => {
        console.log(e)
    })

    _this.piopiy.on('answered', (e) => {
        _this.setState({ answer: false });
        _this.setState({ hangup: true });
        console.log(e)
    })

    _this.piopiy.on('callStream', (e) => {
        console.log(e)
    })

    _this.piopiy.on('inComingCall', (e) => {
        _this.setState({ answer: true });
        console.log(e)
    })

    _this.piopiy.on('hangup', (e) => {
        _this.setState({ hangup: false });
        console.log(e)
    })

    _this.piopiy.on('ended', (e) => {
        _this.setState({ hangup: false });
        console.log(e)
    })

    _this.piopiy.on('hold', (e) => {
        console.log(e)
    });

    _this.piopiy.on('unhold', (e) => {
        console.log(e)
    });

    _this.piopiy.on('error', (e) => {
        console.log(e)
    })

    _this.piopiy.on('logout', (e) => {
        console.log(e)
    })

    _this.piopiy.on('rejected', (e) => {
        _this.setState({ hangup: false });
        console.log(e)
    })

    _this.piopiy.on('mediaFailed', (e) => {
        console.log(e)
    })

    _this.piopiy.on('dtmf', (e) => {
        console.log(e)
    });

    _this.piopiy.on('transfer', (e) => {
        console.log(e)
    })

    _this.piopiy.on('record', (e) => {
        e['record'] = true
    })

    _this.piopiy.on('missed', (e) => {
        console.log(e)
    })

    _this.piopiy.on('api-cmi-transfer', (e) => {
        _this.piopiy.sendDtmf("*9");
    })

    _this.piopiy.on('loginFailed', (e) => {
        console.log(e)
    })

}



export const transfer = (_this, e) => {
    _this.piopiy.transfer(e)
}

export const record = (_this, e) => {
    _this.piopiy.sendDtmf("*5");
}

export const merge = (_this) => {
    _this.piopiy.sendDtmf("0");
}

export const cancel_transfer = (_this) => {
    _this.piopiy.sendDtmf("#");
}

export const answer = (_this) => {
    _this.piopiy.answer();
}

export const terminate = (_this) => {
    _this.piopiy.terminate();
}

export const reject = (_this) => {
    _this.piopiy.reject();
}

export const hold = (_this) => {
    _this.piopiy.hold();
}

export const unhold = (_this) => {
    _this.piopiy.unHold();
}

export const mute = (_this) => {
    _this.piopiy.mute();
}

export const unmute = (_this) => {
    _this.piopiy.unMute();
}

