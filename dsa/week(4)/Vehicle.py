class Vehicle:
    def __init__(self):
        self.__maxSpeed = None  # Private property
        self._numTyres = None  # Protected property
        self.color = ""  # Public property


class Car(Vehicle):
    def __init__(self):
        super().__init__()
        self.numGears = None  # Public property

    def print_details(self):
        print("NumTyres:", self._numTyres)  # Accessing protected property
        print("Color:", self.color)  # Accessing public property
        print("Num gears:", self.numGears)
        # print("Max Speed:", self.__maxSpeed)  # Can't access private property



v = Vehicle()
v.color = "Blue"
# v.__maxSpeed = 100  # Can't access private property
# v._numTyres = 4  # Protected property not accessible

c = Car()
c.color = "Black"
# c._numTyres = 4  # Protected property not accessible
c.numGears = 5
c.print_details()
