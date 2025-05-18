export interface BaseProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'water' | 'subscription';
}

export interface WaterProduct extends BaseProduct {
  category: 'water';
  volume: number;
  bottleSize: number;
  durationDays: number;
}

export interface SubscriptionProduct extends BaseProduct {
  category: 'subscription';
  isSubscription: true;
  subscriptionFrequency: 'weekly' | 'bi-weekly' | 'monthly';
  savings: string;
  monthlyVolumeLiters: number;
  bottleSizeLiters: number;
  frequency: string;
  perDeliveryBottles: number;
  perMonthBottles: number;
  deliveryVolumeLiters: number;
}

export type Product = WaterProduct | SubscriptionProduct;