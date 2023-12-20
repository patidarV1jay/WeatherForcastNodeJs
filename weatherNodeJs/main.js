    const currentTime = document.getElementById("date")
        const days =["Mon","Tue","Wed","Thus","Fri","Sat","Sun"]
        const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const date = new Date()
        const day = days[date.getDay()-1].toUpperCase()
        const month = Months[date.getMonth()]
        const year = date.getFullYear()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let meridian = 'AM'
        if(hours>11){
            meridian="PM"
            if(hours>12){
                hours = hours - 12
            }
        }
        if(minutes < 10){
            minutes = "0"+minutes
        }
        currentTime.innerHTML= `${day} | ${month} ${year} | ${hours}:${minutes}${meridian}`