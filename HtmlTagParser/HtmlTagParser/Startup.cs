using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HtmlTagParser.Startup))]
namespace HtmlTagParser
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
