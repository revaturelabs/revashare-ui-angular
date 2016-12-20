using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
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
    public MainWindow()
    {
      InitializeComponent();

      GetData();
    }


    private void GetData()
    {
      HttpClient client = new HttpClient();
      client.BaseAddress = new Uri("http://34.193.163.157/revashare-api/api/Rider");

      client.DefaultRequestHeaders.Accept.Add(
          new MediaTypeWithQualityHeaderValue("application/json"));

      HttpResponseMessage response = client.GetAsync("api/User").Result;

      if (response.IsSuccessStatusCode)
      {
        var users = response.Content.ReadAsAsync<IEnumerable<Users>>().Result;

        dataGrid1.ItemsSource = users;

      }
      else
      {
        MessageBox.Show("Error Code" + response.StatusCode + " : Message - " + response.ReasonPhrase);
      }

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
