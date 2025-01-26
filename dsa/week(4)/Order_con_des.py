class Vehicle:
    def __init__(self, z):
        print("Vehicle's Parametrized constructor")
        self.__maxSpeed = z 
        self._numTyres = None  
        self.color = None

    def __del__(self):
        print("Vehicle's Destructor")


class Car(Vehicle):
    def __init__(self, x, y):
        super().__init__(x) 
        print("Car's constructor")
        self.numGears = y

    def __del__(self):
        print("Car's Destructor")
        super().__del__()

    def print_details(self):
        print("NumTyres:", self.numTyres)
        print("Color:", self.color)
        print("Num gears:", self.numGears)
       


class HondaCity(Car):
    def __init__(self, x, y):
        super().__init__(x, y) 
        print("Honda city constructor")

    def __del__(self):
        print("Honda city destructor")
        super().__del__()





h = HondaCity(4, 5)
del h  # Explicitly deleting to simulate destructor
