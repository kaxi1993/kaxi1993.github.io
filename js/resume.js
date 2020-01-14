(function (w, d) {
    var experiences = [{
        title: 'Software Engineer',
        years: 'Jun 2017 - Nov 2019',
        location: 'Georgia',
        company: 'Pulsar AI',
        description: 'Developed and shipped 3 successfull messenger chatbots. Created fully automated system to deploy code from bitbucket to AWS. Developed content management system for chatbots. Worked with a variety of different languages, frameworks such as JavaScript, React, Angular, Node, Python, Ruby etc.'
    }, {
        title: 'Web Developer',
        years: 'Jul 2016 - Jun 2017',
        location: 'United States',
        company: 'Usario',
        description: 'Developed survey creator website. I was a fullstack developer, used Node Strongloop framework on backend and Angular on frontend.'
    }, {
        title: 'Web Developer',
        years: 'Feb 2017 - Jun 2017',
        location: 'Australia',
        company: 'FirstMac',
        description: 'I rewrote the REST API to Node, added unit tests. Used mocha for testing.'
    }, {
        title: 'Web Developer',
        years: 'Jan 2015 - Jul 2016',
        location: 'United States',
        company: 'KVSocial',
        description: 'Worked on two websites: the first for creating banners, and the second for online presentations. I was a frontend developer and resolved very complex problems using createjs and fabricjs.'
    }, {
        title: 'Junior Web Developer',
        years: 'Dec 2013 - Jan 2015',
        location: 'Australia',
        company: 'Aurazenix',
        description: 'My responsibility was to convert psd to html and to add animations and some functionality using css and jQuery.'
    }]

    var years = d.getElementById('years')
    years.innerHTML = new Date().getFullYear() - 2014;

    var experience = d.getElementById('experience')
    experiences.forEach(item => addExperience(experience, item))

})(window, document)

function addExperience(el, data) {
    var row = document.createElement('div')
    row.className = 'row '

    var col1 = document.createElement('div')
    col1.className = 'col-md-6'

    var p1 = document.createElement('p')
    p1.className = 'title'
    p1.innerHTML = data.title
    col1.append(p1)

    var p2 = document.createElement('p')
    p2.className = 'subtitle italic'
    p2.innerHTML = data.years
    col1.append(p2)

    var p3 = document.createElement('p')
    p3.className = 'subtitle'
    p3.innerHTML = data.location
    col1.append(p3)

    var col2 = document.createElement('div')
    col2.className = 'col-md-6'


    var p3 = document.createElement('p')
    p3.className = 'title'
    p3.innerHTML = data.company
    col2.append(p3)

    var p4 = document.createElement('p')
    p4.className = 'subtitle'
    p4.innerHTML = data.description
    col2.append(p4)

    row.append(col1)
    row.append(col2)

    el.append(row);
}
