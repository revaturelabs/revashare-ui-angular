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
        private Grid currentGrid;

        public MainWindow()
        {
            InitializeComponent();

            DataManager dm = new DataManager();

            currentGrid = RiderView;

            this.RiderViewTable.ItemsSource = dm.GetRiders();
            this.RiderApproveTable.ItemsSource = dm.GetRidersNeedingApproval();
            this.RiderReportsTable.ItemsSource = dm.GetRidersReports();

            this.DriverViewTable.ItemsSource = dm.GetDrivers();
            this.DriverApproveTable.ItemsSource = dm.GetDriversNeedingApproval();
            this.DriverReportsTable.ItemsSource = dm.GetDriversReports();

            this.LocationTable.ItemsSource = dm.GetLocations();

            this.TripTable.ItemsSource = dm.GetTrips();
        }

        #region Rider Button Calls
        private void btnRiders_Click(object sender, RoutedEventArgs e)
        {
            updateGrid(RiderView);
        }

        private void btnRidersApprove_Click(object sender, RoutedEventArgs e)
        {
            updateGrid(RiderApprove);
        }

        private void btnRidersReports_Click(object sender, RoutedEventArgs e)
        {
            updateGrid(RiderReports);
        }
        #endregion

        #region Driver Button Calls
        private void btnDrivers_Click(object sender, RoutedEventArgs e)
        {
            updateGrid(DriverView);
        }

        private void btnDriversApprove_Click(object sender, RoutedEventArgs e)
        {
            updateGrid(DriverApprove);
        }

        private void btnDriversReports_Click(object sender, RoutedEventArgs e)
        {
            updateGrid(DriverReports);
        }
        #endregion

        #region Location Button Calls
        private void btnLocations_Click(object sender, RoutedEventArgs e)
        {
            updateGrid(Location);
        }
        #endregion

        #region Trip Button Calls
        private void btnTrips_Click(object sender, RoutedEventArgs e)
        {
            updateGrid(Trip);
        }
        #endregion

        private void updateGrid(Grid newGrid)
        {
            if (currentGrid.Name != newGrid.Name)
            {
                currentGrid.Visibility = Visibility.Hidden;
                newGrid.Visibility = Visibility.Visible;
                currentGrid = newGrid;
            }
        }
    }
}
