function CounterViewModel() {
    var self = this;
    self.userName = ko.observable("Wayne");
    self.masonCount = ko.observable(0);
    self.labourCount = ko.observable(0);
    self.unitMasonCost = ko.observable(950);
    self.unitLabourCost = ko.observable(600);
    
    self.increaseMason = function() {
       var currentValue = self.masonCount();
       self.masonCount(currentValue + 0.5);
    }
    
    self.decreaseMason = function() {
       var currentValue = self.masonCount();
       if (currentValue > 0) {
          self.masonCount(currentValue - 0.5);
       }
    }

    self.increaseLabour = function() {
        var currentValue = self.labourCount();
        self.labourCount(currentValue + 0.5);
     }
     
     self.decreaseLabour = function() {
        var currentValue = self.labourCount();
        if (currentValue > 0) {
           self.labourCount(currentValue - 0.5);
        }
     }
    
    self.masonCost = ko.computed(function() {
        return self.masonCount() * self.unitMasonCost();
    });

    self.labourCost = ko.computed(function() {
        return self.labourCount() * self.unitLabourCost();
     });
    
     self.totalCost = ko.computed(function() {
        return self.masonCount() * self.unitMasonCost() + self.labourCount() * self.unitLabourCost();
     });

     self.area = ko.computed(function() {
        totalCost = self.masonCount() * self.unitMasonCost() + self.labourCount() * self.unitLabourCost();
        return Math.round((totalCost/15*100))/100;
     })
    
};
 
const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new CounterViewModel(), knockoutApp);