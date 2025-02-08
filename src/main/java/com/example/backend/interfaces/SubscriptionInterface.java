package com.example.backend.interfaces;

import com.example.backend.model.Subscription;

import java.util.List;
import java.util.Optional;

public interface SubscriptionInterface {
    Subscription createSubscription(Subscription subscription);

    List<Subscription> getAllSubscriptions();

    Optional<Subscription> getSubscriptionById(Long id);

    Subscription updateSubscription(Long id, Subscription subscriptionDetails);

    void deleteSubscription(Long id);
}
