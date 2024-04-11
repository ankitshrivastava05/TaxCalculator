    $('#taxForm').submit(function(e) {
      e.preventDefault();
      $('.error-icon').hide();

      var age = $('#age').val();
      var gross = parseInt($('#annualincome').val());
      var extraincome = parseInt($('#extraincome').val());
      var deductions = parseInt($('#deductions').val());

      var error = false;

      
      if (!age) {
        $('#ageError').show();
        error = true;
      }
      if (isNaN(gross)) {
        $('#annualincomeError').show();
        error = true;
      }
      if (isNaN(extraincome)) {
        $('#extraincomeError').show();
        error = true;
      }
      if (isNaN(deductions)) {
        $('#deductionsError').show();
        error = true;
      }

      if (!error) {
        var taxableIncome = gross + extraincome - deductions;
        var taxAmount = 0;
        var overallIncome=0;
        if(taxableIncome < 8){
            overallIncome=taxableIncome;
           }
        else if (taxableIncome > 8) {
          var taxRate = 0;
          if (age === '<40') {
            taxRate = 0.3;
          } else if (age === '>=40&<60') {
            taxRate = 0.4;
          } else if (age === '>=60') {
            taxRate = 0.1;
          }
        
          
          taxAmount = taxRate * (taxableIncome - 8);
          overallIncome= taxableIncome - taxAmount;
        }

        $('#resultText').text('Your overall income will be '+  overallIncome.toFixed(2) + ' Lakhs')+ $('#after').text(' after the deductions');
        $('#resultModal').modal('show');
      }
    });