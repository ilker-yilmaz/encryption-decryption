import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
this.deneme
let btn = document.getElementById("encrypt");
btn?.addEventListener("click", (e:Event) => this.deneme());
 
 }
   deneme() {
    const clearTextInput = (<HTMLInputElement>document.getElementById("clearTextInput")).value;

    const myusername = (<HTMLInputElement>document.getElementById("cipherTextOutput")).value;
    console.log(clearTextInput)
  }

  

  /*
  
  //ASCII Encoding and Decoding
  var ASCII = {};
  //Encodes byte array to ASCII string
  ASCII.encode = function(bytes) {
      var str = "";
      for (var i = 0; i < bytes.length; i++) {
        str += String.fromCharCode(bytes[i]);
      }
      return str;
    }
    //Decodes ASCII string to byte array
  ASCII.decode = function(str) {
    var bytes = [];
    for (var i = 0; i < str.length; i++) {
      bytes.push(str.charCodeAt(i));
    }
    return bytes;
  }
  
  //Hex Encoding and Decoding
  var Hex = {};
  //Character map
  Hex.map = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  //Encodes byte array to hex string
  Hex.encode = function(bytes) {
      var str = "";
      for (var i = 0; i < bytes.length; i++) {
        str += Hex.map[bytes[i] >> 4] + Hex.map[bytes[i] % 16];
      }
      return str;
    }
    //Decodes hex string to byte array
  Hex.decode = function(str) {
    var bytes = [], tmp1, tmp2;
    for (var i = 0; i < Math.floor(str.length / 2); i++) {
      tmp1 = (Hex.map.indexOf(str[i * 2]) << 4);
      tmp2 = Hex.map.indexOf(str[i * 2 + 1]);
      if (tmp1 == -1 || tmp2 == -1) {
        Status.set("Invalid hex encoded string.");
        return false;
      }
      bytes.push(tmp1 + tmp2);
    }
    return bytes;
  }
  
  //Base 64 Encoding and Decoding
  var Base64 = {};
  //Encoding
  Base64.encode = function(bytes) {
      return btoa(ASCII.encode(bytes));
    }
  //Decoding
  Base64.decode = function(str) {
    var bytes = undefined;
    try {
      bytes = ASCII.decode(atob(str));
    } catch (e) {
      Status.set("Invalid base 64 encoded string.");
    }
    return bytes;
  }
  
  */
}
