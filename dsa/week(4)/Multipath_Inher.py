class Vehicle:
    def __init__(self, z):
        self.__maxSpeed = z 
        self.numTyres = 0 
        self.color = ""  
        print(f"Vehicle's Parametrized constructor {z}")

    def print(self):
        print("Vehicle")


class Car(Vehicle):
    def __init__(self):
        super().__init__(3)  # Calls Vehicle's constructor with parameter
        self.numGears = 0
        print("Car's default constructor")

    def print(self):
        print(f"NumTyres : {self.numTyres}")
        print(f"Color : {self.color}")
        print(f"Num gears : {self.numGears}")


class Truck(Vehicle):
    def __init__(self):
        super().__init__(4)  # Calls Vehicle's constructor with parameter
        print("Truck's constructor")


class Bus(Car, Truck):
    def __init__(self):
        Car.__init__(self)  
        Truck.__init__(self)
        print("Bus's constructor")


# Create a Bus instance
b = Bus()
b.print()
