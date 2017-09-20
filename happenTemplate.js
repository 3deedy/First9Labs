var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){},
		UnixMillisecond: function(){}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){},
	   	    WithOutSeconds: function() {}
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){},
			Name: function(){}
		  }
		  })(),
		}
	})(),
	Second: (function(){
    var s = new Date().getSeconds();
    var sec = s + 1;
		return{
			Second: function(){
        return sec.toString();
      },
			DblDigit: function(){
        if (sec < 10){
          return '0' + min;
        } else {
          return sec.toString();
        }
      }
		}
	})(),
	Minute: (function(){
    var min = new Date().getMinutes();
		return{
			Minute: function(){
        return min.toString();
      },
			DblDigit: function(){
        if (min < 10){
          return '0' + min;
        } else {
          return min.toString();
        }
      }
		}
	})(),
	Hour: (function(){
    var h = new Date().getHours();
		return {
			TwentyFourHour: function() {
        return h.toString();
      },
			TwelveHour: function() {},
			AMPM: (function() {
				return {
					UpperCase: function(){},
					LowerCase: function(){}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){},
			AbrDayOfWeek: function(){},
			FirstTwoOfWeek: function(){},
			WeekOfYear: function(){}
		}
	})(),
	Month: (function(){
    var m = new Date();
    var dm = m.getDate();
    var x = m.getMonth();
		return {

			DateOfMonth: (function(){
				return {
					Numeral: function(){
            return dm.toString();
          },
					Ordinal: function(){
            if (dm < 4 || dm > 20 && dm % 10 === 1){
              return dm + 'st';
            } else if (dm < 4 || dm > 20 && dm % 10 === 2){
              return dm + 'nd';
            } else if (dm < 4 || dm > 20 && dm % 10 === 3){
              return dm + 'rd';
            } else {
              return dm + 'th';
            }
          },
					DateDblDigit: function(){
            return dm.toString();
          },
				}
			})(),
			MonthNumber: function(){
        return m.getMonth()+1+'';
      },

			MonthNumberDblDigit: function(){
        var monthTwoNum = m.getMonth()+1;
        return '0' + monthTwoNum;
      },

			AbrOfCurrentMonth: function(){

        var mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        switch (x){
          case 0:
          return mon[0];
          break;

          case 1:
          return mon[1];
          break;

          case 2:
          return mon[2];
          break;

          case 3:
          return mon[3];
          break;

          case 4:
          return mon[4];
          break;

          case 5:
          return mon[5];
          break;

          case 6:
          return mon[6];
          break;

          case 7:
          return mon[7];
          break;

          case 8:
          return mon[8];
          break;

          case 9:
          return mon[9];
          break;

          case 10:
          return mon[10];
          break;

          case 11:
          return mon[11];
          break;
        }
      },
			CurrentMonth: function(){
        var x = m.getMonth();
        var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        switch (x){
          case 0:
          return month[0];
          break;

          case 1:
          return month[1];
          break;

          case 2:
          return month[2];
          break;

          case 3:
          return month[3];
          break;

          case 4:
          return month[4];
          break;

          case 5:
          return month[5];
          break;

          case 6:
          return month[6];
          break;

          case 7:
          return month[7];
          break;

          case 8:
          return month[8];
          break;

          case 9:
          return month[9];
          break;

          case 10:
          return month[10];
          break;

          case 11:
          return month[11];
          break;
        }
      }
		 }
	})(),
	Year: (function(){
    var y = new Date().getFullYear();
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){},
					Ordinal: function(){}
				}
			})(),
			YearFull: function(){
        return y.toString();
      },
			YearAbr: function(){}
		}
	})(),
	Defaults: function(){}
  }
})();
