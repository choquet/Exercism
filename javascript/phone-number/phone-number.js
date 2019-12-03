export class PhoneNumber {
  constructor(phone) {
    
    this._phone = phone

    // Keep only number
    this._phone = this._phone.match(/\d/g).join("")

    if (this._phone.length < 10 || this._phone.length > 11) {
      // Too short or too long
      this._valid = false
    } else {
      
      // Remove "1"
      if (this._phone.length == 11 && this._phone[0] == "1") {
        this._phone = this._phone.substr(1)
      }

      // Regexp to test NANP validity
      this._valid = /^[2-9]\d{2}[2-9]\d{6}$/.test(this._phone)
    } 
  }

  number() {
    return this._valid ? this._phone : null
  }
}
