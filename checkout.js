class UserService {
    createUser(user) {
        // create new user
        const UserPostEvent = {
          type: "UserPost",
          payload: user,
          source: "User Service",
          timestamp: Date.now(),
          metadata: {
            user_id: user.id,
            user_info: user.info,
          }
        };
        eventBus.publish(UserPostEvent);
    }
    
    updateUser(user) {
        // update existing user
        const UserPostEvent = {
          type: "UserPost",
          payload: user,
          source: "User Service",
          timestamp: Date.now(),
          metadata: {
            user_id: user.id,
            user_info: user.info,
          }
        };
        eventBus.publish(OrderPostEvent);
    }
}

class OrderService {
    createOrder(order) {
      // code to create new order
      const OrderPostEvent = {
        type: "OrderPost",
        payload: order,
        source: "Order Service",
        timestamp: Date.now(),
        metadata: {
          order_id: order.id,
          total_amount: order.total,
          customer_id: order.customer_id
        }
      };
      eventBus.publish(OrderPostEvent);
    }
  
    updateOrder(order) {
      // code to update existing order
      const OrderPostEvent = {
        type: "OrderPost",
        payload: order,
        source: "Order Service",
        timestamp: Date.now(),
        metadata: {
          order_id: order.id,
          total_amount: order.total,
          customer_id: order.customer_id
        }
      };
      eventBus.publish(OrderPostEvent);
    }
}

class PaymentService {
    processPayment(payment) {
      // code to process payment
      const PaymentPostEvent = {
        type: "PaymentPost",
        payload: payment,
        source: "Payment Service",
        timestamp: Date.now(),
        metadata: {
          order_id: payment.order_id,
          payment_amount: payment.amount,
          payment_method: payment.method
        }
      };
      eventBus.publish(PaymentPostEvent);
    }
  
    refundPayment(payment) {
      // code to refund payment
      const PaymentPostEvent = {
        type: "PaymentPost",
        payload: payment,
        source: "Payment Service",
        timestamp: Date.now(),
        metadata: {
          order_id: payment.order_id,
          payment_amount: payment.amount,
          payment_method: payment.method
        }
      };
      eventBus.publish(PaymentPostEvent);
    }
}


class InventoryService {
    updateInventory(product) {
      // code to update product inventory
      const InventoryPostEvent = {
        type: "InventoryPost",
        payload: product,
        source: "Inventory Service",
        timestamp: Date.now(),
        metadata: {
          product_id: product.id,
          inventory_level: product.inventory_level,
          supplier: product.supplier
        }
      };
      eventBus.publish(InventoryPostEvent);
    }
}
    