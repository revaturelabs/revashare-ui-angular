using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace RevaShareUI.Admin
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public class DriverObject
        {
            public string ID { get; set; }
            public string Name { get; set; }
            public string Email { get; set; }
            public string Phone { get; set; }
            public string CarMake { get; set; }
            public string CarModel { get; set; }
            public string CarLicensePlate { get; set; }
            public string CarColor { get; set; }
            public string CarCapacity { get; set; }
        }

        public class RiderObject
        {
            public string ID { get; set; }
            public string Name { get; set; }
            public string Email { get; set; }
            public string Phone { get; set; }
            public string Apartment { get; set; }
        }

        public MainWindow()
        {
            InitializeComponent();

            GetDrivers();
            GetRiders();
        }

        public void GetDrivers()
        {
            var list1 = new ObservableCollection<DriverObject>();
            list1.Add(new DriverObject() { ID = "1", Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = "3" });
            list1.Add(new DriverObject() { ID = "2", Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = "4" });
            list1.Add(new DriverObject() { ID = "3", Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = "4" });
            list1.Add(new DriverObject() { ID = "4", Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = "3" });
            list1.Add(new DriverObject() { ID = "5", Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = "4" });
            list1.Add(new DriverObject() { ID = "6", Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = "4" });
            list1.Add(new DriverObject() { ID = "7", Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = "3" });
            list1.Add(new DriverObject() { ID = "8", Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = "4" });
            list1.Add(new DriverObject() { ID = "9", Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = "4" });
            list1.Add(new DriverObject() { ID = "10", Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = "3" });
            list1.Add(new DriverObject() { ID = "11", Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = "4" });
            list1.Add(new DriverObject() { ID = "12", Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = "4" });
            list1.Add(new DriverObject() { ID = "13", Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = "3" });
            list1.Add(new DriverObject() { ID = "14", Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = "4" });
            list1.Add(new DriverObject() { ID = "15", Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = "4" });
            this.dataGrid1.ItemsSource = list1;
        }

        public void GetRiders()
        {
            var list2 = new ObservableCollection<RiderObject>();
            list2.Add(new RiderObject() { ID = "1", Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list2.Add(new RiderObject() { ID = "2", Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list2.Add(new RiderObject() { ID = "3", Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            list2.Add(new RiderObject() { ID = "4", Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), Apartment = "Apartment 2" });
            list2.Add(new RiderObject() { ID = "5", Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            list2.Add(new RiderObject() { ID = "6", Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list2.Add(new RiderObject() { ID = "7", Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            list2.Add(new RiderObject() { ID = "8", Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list2.Add(new RiderObject() { ID = "9", Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            list2.Add(new RiderObject() { ID = "10", Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), Apartment = "Apartment 2" });
            list2.Add(new RiderObject() { ID = "11", Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), Apartment = "Apartment 2" });
            list2.Add(new RiderObject() { ID = "12", Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list2.Add(new RiderObject() { ID = "13", Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list2.Add(new RiderObject() { ID = "14", Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), Apartment = "Apartment 2" });
            list2.Add(new RiderObject() { ID = "15", Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            this.dataGrid2.ItemsSource = list2;
        }

        private void btnDrivers_Click(object sender, RoutedEventArgs e)
        {
            dataGrid1.Visibility = Visibility.Visible;
            dataGrid2.Visibility = Visibility.Hidden;
        }
        private void btnRiders_Click(object sender, RoutedEventArgs e)
        {
            dataGrid2.Visibility = Visibility.Visible;
            dataGrid1.Visibility = Visibility.Hidden;
        }
    }
}
