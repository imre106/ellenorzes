using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.Xml;
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
using WpfChinook.mvvm.viewmodel;
using WpfChinook.mvvm.views;

namespace WpfChinook
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        AppViewModel viewModel { get; set; }

        public MainWindow()
        {
            InitializeComponent();
            viewModel = new AppViewModel();
        }

        private void menuitemTracks_Click(object sender, RoutedEventArgs e)
        {
            TrackView trackView = new TrackView(viewModel);
            trackView.ShowDialog();
        }

        private void menuitemAlbums_Click(object sender, RoutedEventArgs e)
        {
            AlbumsView albumView = new AlbumsView(viewModel);
            albumView.ShowDialog();
        }
    }
}
