import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface PageBreadcrumbProps {
  crumbs: Crumb[];
}

const PageBreadcrumb = ({ crumbs }: PageBreadcrumbProps) => (
  <nav aria-label="breadcrumb" className="bg-secondary/40 border-b border-secondary-foreground/8">
    <div className="container py-2.5">
      <ol className="flex items-center gap-1 text-xs flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
        <li
          className="flex items-center"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            to="/"
            className="flex items-center gap-1 text-secondary-foreground/50 hover:text-primary transition-colors font-heading font-semibold"
            itemProp="item"
          >
            <Home size={12} />
            <span itemProp="name">Inicio</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {crumbs.map((crumb, i) => (
          <li
            key={crumb.label}
            className="flex items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <ChevronRight size={12} className="text-secondary-foreground/30 mx-1" />
            {crumb.href ? (
              <Link
                to={crumb.href}
                className="text-secondary-foreground/50 hover:text-primary transition-colors font-heading font-semibold"
                itemProp="item"
              >
                <span itemProp="name">{crumb.label}</span>
              </Link>
            ) : (
              <span className="text-primary font-heading font-bold" itemProp="name">
                {crumb.label}
              </span>
            )}
            <meta itemProp="position" content={String(i + 2)} />
          </li>
        ))}
      </ol>
    </div>
  </nav>
);

export default PageBreadcrumb;
