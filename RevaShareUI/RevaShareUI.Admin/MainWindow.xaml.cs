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
            public int ID { get; set; }
            public string Name { get; set; }
            public string Email { get; set; }
            public string Phone { get; set; }
            public string CarMake { get; set; }
            public string CarModel { get; set; }
            public string CarLicensePlate { get; set; }
            public string CarColor { get; set; }
            public int CarCapacity { get; set; }
        }

        public class RiderObject
        {
            public int ID { get; set; }
            public string Name { get; set; }
            public string Email { get; set; }
            public string Phone { get; set; }
            public string Apartment { get; set; }
        }

        public class ReportObject
        {
            public int ID { get; set; }
            public int UserID { get; set; }
            public string Name { get; set; }
            public string Complaint { get; set; }
        }

        public class ApartmentObject
        {
            public int ID { get; set; }
            public string Name { get; set; }
            public string Address { get; set; }
        }

        public MainWindow()
        {
            InitializeComponent();

            this.RiderViewTable.ItemsSource = GetRiders();
            this.RiderApproveTable.ItemsSource = GetRidersNeedingApproval();
            this.RiderReportsTable.ItemsSource = GetRidersReports();
            this.RiderRemoveTable.ItemsSource = GetRiders();

            this.DriverViewTable.ItemsSource = GetDrivers();
            this.DriverApproveTable.ItemsSource = GetDriversNeedingApproval();
            this.DriverReportsTable.ItemsSource = GetDriversReports();
            this.DriverRemoveTable.ItemsSource = GetDrivers();

            this.ApartmentViewTable.ItemsSource = GetApartments();
            this.ApartmentRemoveTable.ItemsSource = GetApartments();
        }

        public ObservableCollection<RiderObject> GetRiders()
        {
            var list = new ObservableCollection<RiderObject>();
            list.Add(new RiderObject() { ID = 1, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list.Add(new RiderObject() { ID = 2, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list.Add(new RiderObject() { ID = 3, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            list.Add(new RiderObject() { ID = 4, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), Apartment = "Apartment 2" });
            list.Add(new RiderObject() { ID = 5, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            list.Add(new RiderObject() { ID = 6, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list.Add(new RiderObject() { ID = 7, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            list.Add(new RiderObject() { ID = 8, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list.Add(new RiderObject() { ID = 9, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            list.Add(new RiderObject() { ID = 10, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), Apartment = "Apartment 2" });
            list.Add(new RiderObject() { ID = 11, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), Apartment = "Apartment 2" });
            list.Add(new RiderObject() { ID = 12, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list.Add(new RiderObject() { ID = 13, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list.Add(new RiderObject() { ID = 14, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), Apartment = "Apartment 2" });
            list.Add(new RiderObject() { ID = 15, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            return list;
        }

        public ObservableCollection<RiderObject> GetRidersNeedingApproval()
        {
            var list = new ObservableCollection<RiderObject>();
            list.Add(new RiderObject() { Name = "John Doe", Email = "jd@gmail.com", Phone = (5551273455).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list.Add(new RiderObject() { Name = "Jane Doe", Email = "jd2@gmail.com", Phone = (5555555635).ToString("(###) ###-####"), Apartment = "Apartment 1" });
            list.Add(new RiderObject() { Name = "Ben Frank", Email = "bf@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            list.Add(new RiderObject() { Name = "Alex Norris", Email = "af@gmail.com", Phone = (5551234545).ToString("(###) ###-####"), Apartment = "Apartment 2" });
            list.Add(new RiderObject() { Name = "Bob Stone", Email = "bs2@gmail.com", Phone = (5555554235).ToString("(###) ###-####"), Apartment = "Apartment 3" });
            return list;
        }

        public ObservableCollection<ReportObject> GetRidersReports()
        {
            var list = new ObservableCollection<ReportObject>();
            list.Add(new ReportObject() { ID = 1, UserID = 1, Name = "Jim Bob", Complaint = "Smells bad" });
            list.Add(new ReportObject() { ID = 2, UserID = 2, Name = "Bob Smith", Complaint = "Looks funny" });
            list.Add(new ReportObject() { ID = 3, UserID = 1, Name = "Jim Bob", Complaint = "Touchs my radio" });
            list.Add(new ReportObject() { ID = 4, UserID = 3, Name = "Matt Damon", Complaint = "Always late, complains about everything" });
            list.Add(new ReportObject() { ID = 5, UserID = 2, Name = "Bob Smith", Complaint = "Just don't like him" });
            return list;
        }

        public ObservableCollection<DriverObject> GetDrivers()
        {
            var list = new ObservableCollection<DriverObject>();
            list.Add(new DriverObject() { ID = 1, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = 3 });
            list.Add(new DriverObject() { ID = 2, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = 4 });
            list.Add(new DriverObject() { ID = 3, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = 4 });
            list.Add(new DriverObject() { ID = 4, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = 3 });
            list.Add(new DriverObject() { ID = 5, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = 4 });
            list.Add(new DriverObject() { ID = 6, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = 4 });
            list.Add(new DriverObject() { ID = 7, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = 3 });
            list.Add(new DriverObject() { ID = 8, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = 4 });
            list.Add(new DriverObject() { ID = 9, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = 4 });
            list.Add(new DriverObject() { ID = 10, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = 3 });
            list.Add(new DriverObject() { ID = 11, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = 4 });
            list.Add(new DriverObject() { ID = 12, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = 4 });
            list.Add(new DriverObject() { ID = 13, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = 3 });
            list.Add(new DriverObject() { ID = 14, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = 4 });
            list.Add(new DriverObject() { ID = 15, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = 4 });
            return list;
        }

        public ObservableCollection<DriverObject> GetDriversNeedingApproval()
        {
            var list = new ObservableCollection<DriverObject>();
            list.Add(new DriverObject() { ID = 1, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = 3 });
            list.Add(new DriverObject() { ID = 2, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = 4 });
            list.Add(new DriverObject() { ID = 3, Name = "Matt Damon", Email = "md@gmail.com", Phone = (5555551234).ToString("(###) ###-####"), CarMake = "Ford", CarModel = "Fusion", CarLicensePlate = "123-DEF", CarColor = "Blue", CarCapacity = 4 });
            list.Add(new DriverObject() { ID = 4, Name = "Jim Bob", Email = "jb@gmail.com", Phone = (5551235555).ToString("(###) ###-####"), CarMake = "Toyota", CarModel = "Prius", CarLicensePlate = "123-ABC", CarColor = "Silver", CarCapacity = 3 });
            list.Add(new DriverObject() { ID = 5, Name = "Bob Smith", Email = "bs@gmail.com", Phone = (5555555555).ToString("(###) ###-####"), CarMake = "Honda", CarModel = "Civic", CarLicensePlate = "456-ABC", CarColor = "Red", CarCapacity = 4 });
            return list;
        }

        public ObservableCollection<ReportObject> GetDriversReports()
        {
            var list = new ObservableCollection<ReportObject>();
            list.Add(new ReportObject() { ID = 1, UserID = 1, Name = "Jim Bob", Complaint = "Smells bad" });
            list.Add(new ReportObject() { ID = 2, UserID = 2, Name = "Bob Smith", Complaint = "DRIVES LIKE A CRAZY PERSON!" });
            list.Add(new ReportObject() { ID = 3, UserID = 1, Name = "Jim Bob", Complaint = "Looks at me too much" });
            list.Add(new ReportObject() { ID = 4, UserID = 3, Name = "Matt Damon", Complaint = "Rarely shows up, normally have to get an uber" });
            list.Add(new ReportObject() { ID = 5, UserID = 2, Name = "Bob Smith", Complaint = "Texts and drives" });
            return list;
        }

        public ObservableCollection<ApartmentObject> GetApartments()
        {
            var list = new ObservableCollection<ApartmentObject>();
            list.Add(new ApartmentObject() { ID = 1, Name = "Apartment 1", Address = "123 Street St, City, State 12345" });
            list.Add(new ApartmentObject() { ID = 2, Name = "Apartment 2", Address = "123 Avenue Ave, City, State 12345" });
            list.Add(new ApartmentObject() { ID = 3, Name = "Apartment 3", Address = "123 Court Ct, City, State 12345" });
            return list;
        }

        private void btnRiders_Click(object sender, RoutedEventArgs e)
        {
            ResetView();
            RiderViewTable.Visibility = Visibility.Visible;
            TableName.Content = "Riders - View All Riders";
        }

        private void btnRidersApprove_Click(object sender, RoutedEventArgs e)
        {
            ResetView();
            RiderApproveTable.Visibility = Visibility.Visible;
            TableName.Content = "Riders - Approve New Riders";
        }

        private void btnRidersReports_Click(object sender, RoutedEventArgs e)
        {
            ResetView();
            RiderReportsTable.Visibility = Visibility.Visible;
            TableName.Content = "Riders - View All Reports";
        }

        private void btnRidersRemove_Click(object sender, RoutedEventArgs e)
        {
            ResetView();
            RiderRemoveTable.Visibility = Visibility.Visible;
            TableName.Content = "Riders - Remove Riders";
        }

        private void btnDrivers_Click(object sender, RoutedEventArgs e)
        {
            ResetView();
            DriverViewTable.Visibility = Visibility.Visible;
            TableName.Content = "Drivers - View All Drivers";
        }

        private void btnDriversApprove_Click(object sender, RoutedEventArgs e)
        {
            ResetView();
            DriverApproveTable.Visibility = Visibility.Visible;
            TableName.Content = "Drivers - Approve New Drivers";
        }

        private void btnDriversReports_Click(object sender, RoutedEventArgs e)
        {
            ResetView();
            DriverReportsTable.Visibility = Visibility.Visible;
            TableName.Content = "Drivers - View All Reports";
        }

        private void btnDriversRemove_Click(object sender, RoutedEventArgs e)
        {
            ResetView();
            DriverRemoveTable.Visibility = Visibility.Visible;
            TableName.Content = "Drivers - Remove Drivers";
        }

        private void btnApartments_Click(object sender, RoutedEventArgs e)
        {
            ResetView();
            ApartmentViewTable.Visibility = Visibility.Visible;
            TableName.Content = "Apartments - View All Apartments";
        }

        private void btnApartmentsRemove_Click(object sender, RoutedEventArgs e)
        {
            ResetView();
            ApartmentRemoveTable.Visibility = Visibility.Visible;
            TableName.Content = "Apartments - Remove Apartments";
        }

        private void ResetView()
        {
            foreach (var child in MainGrid.Children)
            {
                if (child.GetType() == typeof(DataGrid))
                {
                    DataGrid grid = (DataGrid)child;
                    if (grid.IsVisible)
                    {
                        grid.Visibility = Visibility.Hidden;
                    }
                }
            }
        }
    }
}
