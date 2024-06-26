﻿using System;
using System.Collections.Generic;
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
using System.Windows.Shapes;
using WpfChinook.mvvm.viewmodel;

namespace WpfChinook.mvvm.views
{
    /// <summary>
    /// Interaction logic for TrackView.xaml
    /// </summary>
    public partial class TrackView : Window
    {
        public TrackView(AppViewModel viewModel)
        {
            InitializeComponent();
            DataContext = viewModel;
        }
    }
}
