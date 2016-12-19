using RevaShareUI.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RevaShareUI.Admin
{
    public class DataManager
    {

        public List<Rider> GetRiders()
        {
            var list = new List<Rider>();
            list.Add(new Rider() { ID = 1, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list.Add(new Rider() { ID = 2, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list.Add(new Rider() { ID = 3, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            list.Add(new Rider() { ID = 4, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), Apartment = "Apartment 2" });
            list.Add(new Rider() { ID = 5, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            list.Add(new Rider() { ID = 6, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list.Add(new Rider() { ID = 7, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            list.Add(new Rider() { ID = 8, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list.Add(new Rider() { ID = 9, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            list.Add(new Rider() { ID = 10, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), Apartment = "Apartment 2" });
            list.Add(new Rider() { ID = 11, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), Apartment = "Apartment 2" });
            list.Add(new Rider() { ID = 12, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list.Add(new Rider() { ID = 13, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list.Add(new Rider() { ID = 14, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), Apartment = "Apartment 2" });
            list.Add(new Rider() { ID = 15, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            return list;
        }

        public List<Rider> GetRidersNeedingApproval()
        {
            var list = new List<Rider>();
            list.Add(new Rider() { Name = "John Doe", Email = "jd@gmail.com", Phone = (5551273455).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list.Add(new Rider() { Name = "Jane Doe", Email = "jd2@gmail.com", Phone = (5555555635).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list.Add(new Rider() { Name = "Ben Frank", Email = "bf@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            list.Add(new Rider() { Name = "Alex Norris", Email = "af@gmail.com", Phone = (5551234545).ToString("(###) ###-####"), Apartment = "Apartment 2" });
            list.Add(new Rider() { Name = "Bob Stone", Email = "bs2@gmail.com", Phone = (5555554235).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            return list;
        }

        public List<Report> GetRidersReports()
        {
            var list = new List<Report>();
            list.Add(new Report() { ID = 1, UserID = 1, Name = "Jim Bob", Complaint = "Smells bad" });
            list.Add(new Report() { ID = 2, UserID = 2, Name = "Bob Smith", Complaint = "Looks funny" });
            list.Add(new Report() { ID = 3, UserID = 1, Name = "Jim Bob", Complaint = "Touchs my radio" });
            list.Add(new Report() { ID = 4, UserID = 3, Name = "Matt Damon", Complaint = "Always late, complains about everything" });
            list.Add(new Report() { ID = 5, UserID = 2, Name = "Bob Smith", Complaint = "Just don't like him" });
            return list;
        }

        public List<Driver> GetDrivers()
        {
            var list = new List<Driver>();
            list.Add(new Driver() { ID = 1, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = 3 });
            list.Add(new Driver() { ID = 2, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = 4 });
            list.Add(new Driver() { ID = 3, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = 4 });
            list.Add(new Driver() { ID = 4, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = 3 });
            list.Add(new Driver() { ID = 5, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = 4 });
            list.Add(new Driver() { ID = 6, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = 4 });
            list.Add(new Driver() { ID = 7, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = 3 });
            list.Add(new Driver() { ID = 8, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = 4 });
            list.Add(new Driver() { ID = 9, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = 4 });
            list.Add(new Driver() { ID = 10, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = 3 });
            list.Add(new Driver() { ID = 11, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = 4 });
            list.Add(new Driver() { ID = 12, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = 4 });
            list.Add(new Driver() { ID = 13, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = 3 });
            list.Add(new Driver() { ID = 14, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = 4 });
            list.Add(new Driver() { ID = 15, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = 4 });
            return list;
        }

        public List<Driver> GetDriversNeedingApproval()
        {
            var list = new List<Driver>();
            list.Add(new Driver() { ID = 1, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = 3 });
            list.Add(new Driver() { ID = 2, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = 4 });
            list.Add(new Driver() { ID = 3, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = 4 });
            list.Add(new Driver() { ID = 4, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = 3 });
            list.Add(new Driver() { ID = 5, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = 4 });
            return list;
        }

        public List<Report> GetDriversReports()
        {
            var list = new List<Report>();
            list.Add(new Report() { ID = 1, UserID = 1, Name = "Jim Bob", Complaint = "Smells bad" });
            list.Add(new Report() { ID = 2, UserID = 2, Name = "Bob Smith", Complaint = "DRIVES LIKE A CRAZY PERSON!" });
            list.Add(new Report() { ID = 3, UserID = 1, Name = "Jim Bob", Complaint = "Looks at me too much" });
            list.Add(new Report() { ID = 4, UserID = 3, Name = "Matt Damon", Complaint = "Rarely shows up, normally have to get an uber" });
            list.Add(new Report() { ID = 5, UserID = 2, Name = "Bob Smith", Complaint = "Texts and drives" });
            return list;
        }

        public List<Location> GetLocations()
        {
            var list = new List<Location>();
            list.Add(new Location() { ID = 1, Name = "Location 1", Address = "123 Street St, City, State 12345" });
            list.Add(new Location() { ID = 2, Name = "Location 2", Address = "123 Avenue Ave, City, State 12345" });
            list.Add(new Location() { ID = 3, Name = "Location 3", Address = "123 Court Ct, City, State 12345" });
            return list;
        }

        public List<Trip> GetTrips()
        {
            var list = new List<Trip>();
            list.Add(new Trip() { ID = 1, StartLocation = "Location 1", EndLocation = "Revature", DepartureTime = (0800).ToString("##:##"), Driver = GetDrivers()[1], Riders = new List<Rider> { GetRiders()[2], GetRiders()[0], GetRiders()[9], GetRiders()[5] } });
            list.Add(new Trip() { ID = 2, StartLocation = "Revature", EndLocation = "Location 1", DepartureTime = (1800).ToString("##:##"), Driver = GetDrivers()[1], Riders = new List<Rider> { GetRiders()[2], GetRiders()[0], GetRiders()[9], GetRiders()[5] } });
            list.Add(new Trip() { ID = 3, StartLocation = "Location 3", EndLocation = "Revature", DepartureTime = (0820).ToString("##:##"), Driver = GetDrivers()[4], Riders = new List<Rider> { GetRiders()[1], GetRiders()[3], GetRiders()[7], GetRiders()[11] } });
            list.Add(new Trip() { ID = 4, StartLocation = "Revature", EndLocation = "Location 3", DepartureTime = (1710).ToString("##:##"), Driver = GetDrivers()[4], Riders = new List<Rider> { GetRiders()[1], GetRiders()[3], GetRiders()[7], GetRiders()[11] } });
            list.Add(new Trip() { ID = 5, StartLocation = "Location 2", EndLocation = "Revature", DepartureTime = (0815).ToString("##:##"), Driver = GetDrivers()[9], Riders = new List<Rider> { GetRiders()[4], GetRiders()[6], GetRiders()[10], GetRiders()[8] } });
            list.Add(new Trip() { ID = 6, StartLocation = "Revature", EndLocation = "Location 2", DepartureTime = (1835).ToString("##:##"), Driver = GetDrivers()[9], Riders = new List<Rider> { GetRiders()[4], GetRiders()[6], GetRiders()[10], GetRiders()[8] } });
            return list;
        }
    }
}
