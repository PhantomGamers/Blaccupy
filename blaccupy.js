// Rich Jones of Gun.io, public domain. Fork me, please! http://github.com/Miserlou/
// Forked and modified for CISPA relevance by PhantomGamers
var now = new Date();

if (now.getDate() == 22 && now.getMonth() == 3 && now.getFullYear() == 2013) {

    window.onload = function(){
      var oBody = document.getElementsByTagName('body')[0]; 
      oBody.style.cssText = "background: #000000; text-align: center; color: #3A3A3A; font: 2.2em Helvetica; vertical-align: middle"; 
      oBody.innerHTML = '<div style="width:960px;margin:0 auto;">' + document.location.hostname + ' is...<br /><br /><div style="text-decoration:underline;">BLACKED OUT!</div><br />...in protest of <a href="https://en.wikipedia.org/wiki/Cyber_Intelligence_Sharing_and_Protection_Act" target="_blank" style="color:#FF0000">pending legislation</a> which threatens the freedoms of websites like this one and the freedoms of the people who use them.<br /><br />Please <a href="http://www.cispaisback.org/" target="_blank" style="color:#FF0000">help protect our free speech</a> against the corporate and political interests which seek to take them away!<br /><br />(And don\'t worry, we\'ll be back in business tomorrow!)</div>';
    }
}
