import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  MoreHorizontal,
  Package,
  DollarSign,
  Eye,
  Star
} from 'lucide-react';

// Mock data
const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    description: 'High-quality noise-cancelling headphones with 30-hour battery life',
    price: '$199.99',
    category: 'Electronics',
    stock: 45,
    status: 'active',
    image: '/api/placeholder/300/200',
    rating: 4.8,
    reviews: 124,
    createdAt: '2024-03-01'
  },
  {
    id: 2,
    name: 'Fast Wireless Charger',
    description: '15W fast charging pad compatible with all Qi-enabled devices',
    price: '$29.99',
    category: 'Accessories',
    stock: 89,
    status: 'active',
    image: '/api/placeholder/300/200',
    rating: 4.6,
    reviews: 89,
    createdAt: '2024-02-28'
  },
  {
    id: 3,
    name: 'Premium Phone Case',
    description: 'Protective case with military-grade drop protection',
    price: '$24.99',
    category: 'Accessories',
    stock: 156,
    status: 'active',
    image: '/api/placeholder/300/200',
    rating: 4.7,
    reviews: 203,
    createdAt: '2024-02-25'
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    description: 'Portable speaker with 360-degree sound and waterproof design',
    price: '$79.99',
    category: 'Electronics',
    stock: 23,
    status: 'low_stock',
    image: '/api/placeholder/300/200',
    rating: 4.9,
    reviews: 76,
    createdAt: '2024-02-20'
  },
  {
    id: 5,
    name: 'USB-C Cable Set',
    description: 'Set of 3 high-speed charging cables (1m, 2m, 3m)',
    price: '$19.99',
    category: 'Accessories',
    stock: 0,
    status: 'out_of_stock',
    image: '/api/placeholder/300/200',
    rating: 4.4,
    reviews: 45,
    createdAt: '2024-02-15'
  },
  {
    id: 6,
    name: 'Gaming Mouse Pad',
    description: 'Large gaming mouse pad with RGB lighting',
    price: '$34.99',
    category: 'Gaming',
    stock: 67,
    status: 'active',
    image: '/api/placeholder/300/200',
    rating: 4.5,
    reviews: 32,
    createdAt: '2024-02-10'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'default';
    case 'low_stock': return 'warning';
    case 'out_of_stock': return 'destructive';
    default: return 'secondary';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'active': return 'Active';
    case 'low_stock': return 'Low Stock';
    case 'out_of_stock': return 'Out of Stock';
    default: return status;
  }
};

export default function Products() {
  return (
    <DashboardLayout 
      title="Products" 
      description="Manage your product catalog and inventory"
    >
      <div className="space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
                <SelectItem value="gaming">Gaming</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="low_stock">Low Stock</SelectItem>
                <SelectItem value="out_of_stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="gradient" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={getStatusColor(product.status)} className="text-xs">
                        {getStatusText(product.status)}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-1">{product.name}</CardTitle>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Product Image */}
                <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">
                    📷 Product Image
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-primary">
                      {product.price}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Package className="h-3 w-3" />
                      {product.stock} in stock
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  <Button size="sm" className="flex-1 gap-2">
                    <Eye className="h-3 w-3" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 gap-2">
                    <Edit className="h-3 w-3" />
                    Edit
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Products</p>
                  <p className="text-2xl font-bold">{products.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-success" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Value</p>
                  <p className="text-2xl font-bold">$12,847</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-warning" />
                <div>
                  <p className="text-sm text-muted-foreground">Low Stock</p>
                  <p className="text-2xl font-bold">
                    {products.filter(p => p.status === 'low_stock').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-destructive" />
                <div>
                  <p className="text-sm text-muted-foreground">Out of Stock</p>
                  <p className="text-2xl font-bold">
                    {products.filter(p => p.status === 'out_of_stock').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}